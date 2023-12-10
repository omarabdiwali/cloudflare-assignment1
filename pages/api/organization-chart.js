export const config = {
  runtime: 'edge'
}

const formatData = (file) => {
  file = file.split('\n').slice(1)
  let org = {}
  let allDepartments = {}

  for (let i = 0; i < file.length; i++) {
    let line = file[i].split(',');
    let dp = line[1];
    
    let curEmp = {
      "name": line[0],
      "department": line[1],
      "salary": parseInt(line[2]),
      "office": line[3],
      isManager: line[4] == "TRUE",
      "skills": [line[5], line[6], line[7]]
    }
    
    if (!(dp in allDepartments)) {
      allDepartments[dp] = {};
      allDepartments[dp]["name"] = dp;
      allDepartments[dp]["managerName"] = "";
      allDepartments[dp]["employees"] = []
    }
    
    if (line[4] == "TRUE") {
      allDepartments[dp]["managerName"] = line[0];
    }
    
    allDepartments[dp]["employees"].push(curEmp)
  }

  let departments = Object.values(allDepartments)
  org["organization"] = {}
  org["organization"]["departments"] = departments
  return org;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const myKv = process.env.ORG;
    const org = await myKv.get("organization");
    return new Response(org);
  } else {
    const body = await req.json();
    const { organizationData } = body;
    let formattedData = formatData(organizationData);
    
    let emps = [];
    let deps = formattedData.organization.departments;

    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      emps.push(...dep.employees);
    }

    let res = { emps };

    return new Response(JSON.stringify(res));
  }
}
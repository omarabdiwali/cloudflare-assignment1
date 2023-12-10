// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  runtime: 'edge'
}

const filterData = (a, b) => {
  let name = a.name.toLowerCase();
  let office = a.office.toLowerCase();
  let skills = a.skills.map(s => s.toLowerCase()).join("/");

  if (name.includes(b.name.toLowerCase()) && office.includes(b.office.toLowerCase()) && skills.includes(b.skill.toLowerCase())) {
    let minSalary = b.minSalary ? b.minSalary : -Infinity;
    let maxSalary = b.maxSalary ? b.maxSalary : Infinity;
    if (a.salary <= maxSalary && a.salary >= minSalary) {
      return true
    }
  }
  return false;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const me = {
      "name": "Omar",
      "homepage": "https://omarabdiwali.vercel.app",
      "githubURL": "https://github.com/omarabdiwali",
      "interestingFact": "I have played soccer all my life, and won major tournaments in my city.",
      "skills": ["React", "JavaScript", "Python", "MongoDB"]
    }
    
    return new Response(JSON.stringify(me));
  }
  else {
    const employee = await req.json();
    const data = await process.env.ORG.get("organization");
    const orgChart = JSON.parse(data);
    
    let dep = orgChart.organization.departments;
    let emps = [];

    for (let i = 0; i < dep.length; i++) {
      const name = dep[i].name.toLowerCase();
      if (name.includes(employee.department.toLowerCase())) {
        emps.push(...dep[i].employees);
      }
    }

    emps = emps.filter(d => filterData(d, employee));
    let res = { "employees": emps };
    return new Response(JSON.stringify(res));
  }
}

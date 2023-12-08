// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  runtime: 'edge'
}

const filterData = (a, b) => {
  if (a.name == b.name && a.office == b.office && a.skills.includes(b.skill)) {
    if (a.salary <= b.maxSalary && a.salary >= b.minSalary) {
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
      "interestingFact": "I am from Canada.",
      "skills": ["React", "JavaScript", "Python", "MongoDB"]
    }
    
    return new Response(JSON.stringify(me));
  }
  else {
    const orgChart = process.env.ORG.get("organization");
    const employee = JSON.parse(req.body);
    let dep = orgChart[employee.department].employees;
    dep = dep.filter(d => filterData(d, employee));

    let res = { "employees": dep };
    return new Response(JSON.stringify(res));
  }
}

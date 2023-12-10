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
    // const data = await process.env.ORG.get("organization");
    // const orgChart = JSON.parse(data);
    
    // let dep = orgChart.organization.departments;
    let emps = [
      {
        "name": "John",
        "department": "CDN",
        "salary": 80,
        "office": "Lisbon",
        "isManager": false,
        "skills": [
          "Caching",
          "C++",
          "AI"
        ]
      },
      {
        "name": "Aziel Gibson",
        "department": "CDN",
        "salary": 145,
        "office": "New York",
        "isManager": true,
        "skills": [
          "Caching",
          "C++",
          "AI"
        ]
      },
      {
        "name": "Carl Nava",
        "department": "CDN",
        "salary": 230,
        "office": "London",
        "isManager": false,
        "skills": [
          "HTML",
          "Rust",
          "GoLang"
        ]
      },
      {
        "name": "Korbyn Cuevas",
        "department": "CDN",
        "salary": 86,
        "office": "Singapore",
        "isManager": false,
        "skills": [
          "Distributed Systems",
          "Rust",
          "AI"
        ]
      },
      {
        "name": "Cameron Doyle",
        "department": "CDN",
        "salary": 81,
        "office": "Lisbon",
        "isManager": false,
        "skills": [
          "HTML",
          "CSS",
          "Postgres"
        ]
      },
      {
        "name": "Armando Trujillo",
        "department": "CDN",
        "salary": 178,
        "office": "London",
        "isManager": false,
        "skills": [
          "Typescript",
          "CSS",
          "GoLang"
        ]
      },
      {
        "name": "Franco Short",
        "department": "CDN",
        "salary": 82,
        "office": "Lisbon",
        "isManager": false,
        "skills": [
          "Caching",
          "CSS",
          "AI"
        ]
      },
      {
        "name": "Cohen Dougherty",
        "department": "CDN",
        "salary": 157,
        "office": "London",
        "isManager": false,
        "skills": [
          "HTML",
          "CSS",
          "GoLang"
        ]
      },
      {
        "name": "Luca Acosta",
        "department": "CDN",
        "salary": 175,
        "office": "Singapore",
        "isManager": false,
        "skills": [
          "Distributed Systems",
          "CSS",
          "AI"
        ]
      },
      {
        "name": "Salem Foley",
        "department": "CDN",
        "salary": 290,
        "office": "London",
        "isManager": false,
        "skills": [
          "HTML",
          "CSS",
          "Postgres"
        ]
      },
      {
        "name": "Edison Hamilton",
        "department": "CDN",
        "salary": 267,
        "office": "Singapore",
        "isManager": false,
        "skills": [
          "HTML",
          "CSS",
          "GoLang"
        ]
      },
      {
        "name": "Korbin Francis",
        "department": "CDN",
        "salary": 108,
        "office": "Lisbon",
        "isManager": false,
        "skills": [
          "Distributed Systems",
          "Rust",
          "AI"
        ]
      },
      {
        "name": "Niko Molina",
        "department": "CDN",
        "salary": 229,
        "office": "London",
        "isManager": false,
        "skills": [
          "HTML",
          "Performance",
          "GoLang"
        ]
      },
      {
        "name": "Thomas Nixon",
        "department": "CDN",
        "salary": 201,
        "office": "San Francisco",
        "isManager": false,
        "skills": [
          "Caching",
          "C++",
          "AI"
        ]
      },
      {
        "name": "Zahir Hartman",
        "department": "CDN",
        "salary": 106,
        "office": "Singapore",
        "isManager": false,
        "skills": [
          "HTML",
          "Rust",
          "Postgres"
        ]
      },
      {
        "name": "Levi Rivers",
        "department": "CDN",
        "salary": 141,
        "office": "Austin",
        "isManager": false,
        "skills": [
          "Distributed Systems",
          "Performance",
          "GoLang"
        ]
      },
      {
        "name": "Elias Quintero",
        "department": "CDN",
        "salary": 215,
        "office": "London",
        "isManager": false,
        "skills": [
          "Typescript",
          "C++",
          "AI"
        ]
      },
      {
        "name": "Ander Quintero",
        "department": "CDN",
        "salary": 226,
        "office": "Singapore",
        "isManager": false,
        "skills": [
          "Caching",
          "Rust",
          "GoLang"
        ]
      },
      {
        "name": "Adan Sanford",
        "department": "CDN",
        "salary": 280,
        "office": "Austin",
        "isManager": false,
        "skills": [
          "Distributed Systems",
          "Performance",
          "AI"
        ]
      },
      {
        "name": "Matthew Christensen",
        "department": "CDN",
        "salary": 204,
        "office": "London",
        "isManager": false,
        "skills": [
          "HTML",
          "C++",
          "Postgres"
        ]
      }
    ];

    // for (let i = 0; i < dep.length; i++) {
    //   const name = dep[i].name;
    //   if (name.includes(employee.department)) {
    //     emps.push(...dep[i].employees);
    //   }
    // }

    emps = emps.filter(d => filterData(d, employee));
    let res = { "employees": emps };
    return new Response(JSON.stringify(res));
  }
}

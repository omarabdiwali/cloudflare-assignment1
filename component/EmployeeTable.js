export default function EmployeeTable({ employees }) {
  return (
    <table className="border-collapse table-auto w-full">
      <thead>
        <tr>
          <th className="border-b border-slate-600 font-medium p-3 pt-0 pb-3 text-slate-200 text-left">Name</th>
          <th className="border-b border-slate-600 font-medium p-3 pt-0 pb-3 text-slate-200 text-left">Department</th>
          <th className="border-b border-slate-600 font-medium p-3 pt-0 pb-3 text-slate-200 text-left">Office</th>
          <th className="border-b border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-200 text-left">Salary</th>
          <th className="border-b border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-200 text-left">Role</th>
          <th className="border-b border-slate-600 font-medium p-3 pr-5 pt-0 pb-3 text-slate-200 text-left">Skills</th>
        </tr>
      </thead>
      <tbody className="bg-gray-800">
        {employees.slice.map((emp, i) => {
          let skills = emp.skills.join(' / ');

          return (
            <tr key={i}>
              <td className="border-b text-xs border-slate-700 p-3 text-slate-400">{emp.name}</td>
              <td className="border-b text-xs border-slate-700 p-3 text-slate-400">{emp.department}</td>
              <td className="border-b text-xs border-slate-700 p-3 text-slate-400">{emp.office}</td>
              <td className="border-b text-xs border-slate-700 p-3 text-slate-400">{emp.salary}</td>
              <td className="border-b text-xs border-slate-700 p-3 text-slate-400">{emp.isManager ? 'Manager' : 'Employee'}</td>
              <td className="border-b text-xs border-slate-700 p-3 text-slate-400">{skills}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
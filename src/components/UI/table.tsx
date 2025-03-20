import { Edit, Trash2 } from "lucide-react";
import React from "react";

export const Table = ({ data }) => {
  return (
    <table className="shadow overflow-hidden border-border border min-w-full divide-y divide-border">
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
};

export const TableBody = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-border">
      {data.map((teacher) => (
        <tr key={teacher.id}>
          <td className="px-6 py-4 whitespace-nowrap text-muted_foreground font-semibold">{teacher.name}</td>
          <td className="px-6 py-4 whitespace-nowrap text-muted_foreground font-semibold">{teacher.subject}</td>
          <td className="px-6 py-4 whitespace-nowrap text-muted_foreground font-semibold">{teacher.email}</td>
          <td className="px-6 py-4 whitespace-nowrap text-muted_foreground font-semibold">
            <button className="text-blue-500 hover:text-blue-700 mr-2">
              <Edit />
            </button>
            <button className="text-red-500 hover:text-red-700"><Trash2 /></button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export const TableHeader = () => {
  return (
    <thead className="bg-[#EDF9FD]">
      <tr>
        <th className="p-5 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
          Name
        </th>
        <th className="p-5 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
          Subject
        </th>
        <th className="p-5 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
          Email
        </th>
        <th className="p-5 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
  );
};

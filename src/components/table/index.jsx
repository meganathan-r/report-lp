const CTable = ({ data, tableHeading, cols, suf }) => {
  return (
    <table className="w-full  lg:col-span-2 space-y-6 border-collapse rounded-lg overflow-hidden">
      <thead>
        <tr className="">
          {tableHeading?.map((title, idx) => (
            <th
              key={idx}
              className="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-sm text-gray-600">
        {data?.map((row, rowInd) => (
          <tr key={rowInd}>
            {cols?.map((colKey, i) => (
              <td className="px-4 py-4 border-b border-gray-200">
                {row[colKey]}
                {i % 2 ? suf : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CTable;

import { useState } from "react";
import "./InputTable.css";

type propsType = {
  cols: any[];
  data: any[];
  setData: any;
};

export default function InputTable(props: propsType) {
  const { data, cols, setData } = props;
  const [dataSource, setDataSource] = useState(data);

  const addRow = () => {
    setDataSource([...dataSource, {}]);
  };
  const removeRow = (i: any) => {
    setDataSource([...dataSource.slice(0, i), ...dataSource.slice(i + 1)]);
  };

  return (
    <>
      <table className="input-table">
        <thead>
          <tr>
            <th></th>
            {cols.map((col, colInd) => (
              <th key={colInd}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, rowInd) => (
            <tr key={rowInd}>
              <td>
                <button
                  className="remove-button"
                  onClick={() => {
                    removeRow(rowInd);
                  }}
                >
                  Remove
                </button>
              </td>
              {cols.map((col, colInd) => (
                <td key={colInd}>
                  <input
                    className="table-input"
                    value={row[col.key]}
                    onChange={(e) => {
                      row[col.key] = e.target.value;
                      data[rowInd] = { ...data[rowInd] };
                      setDataSource([...dataSource]);
                      setData([...dataSource]);
                    }}
                    type="text"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={addRow}>
        Add Row
      </button>
    </>
  );
}

# Inputable

Inputable is a React component that allows you to create a dynamic, Excel-like table with editable rows and columns. It provides an easy way to add and remove rows, and update cell values within the table.

## Demo

Check out the [demo](https://github.com/BasitAyaz/InputTable).

## Installation

To install Inputable, use npm or yarn:

```bash
npm install inputtable
```


or

```bash
yarn add inputtable
```

## Usage

Here’s a simple example to get you started:

```jsx
import React, { useState } from "react";
import InputTable from "inputable";

const App = () => {
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Doe", age: 30 },
  ]);

  const columns = [
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
  ];

  return (
    <div>
      <h1>My Input Table</h1>
      <InputTable cols={columns} data={data} setData={setData} />
    </div>
  );
};

export default App;
```

## Props

The `InputTable` component accepts the following props:

- `cols`: An array of objects defining the columns of the table. Each object should have a `label` (the column header) and a `key` (the key for the corresponding data value).
- `data`: An array of objects representing the initial data for the table.
- `setData`: A function to update the parent component's state when the table data changes.

## Example

```jsx
const columns = [
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
];

const initialData = [
  { name: "Alice", age: 23 },
  { name: "Bob", age: 34 },
];

const [data, setData] = useState(initialData);

<InputTable cols={columns} data={data} setData={setData} />;
```

## Styling

Inputable comes with basic styles to give the table an Excel-like appearance. You can further customize the styles by overriding the default CSS classes.

### Default CSS Classes

- `input-table`: The main table element.
- `table-input`: The input element inside each table cell.
- `remove-button`: The button to remove a row.
- `add-button`: The button to add a row.

You can override these classes in your CSS file to customize the appearance of the table.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License.

## Author

Created by [Basit Ahmed](https://github.com/BasitAyaz).

## Repository

[InputTable GitHub Repository](https://github.com/BasitAyaz/InputTable)

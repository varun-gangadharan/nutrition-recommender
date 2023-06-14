import { Checkbox } from 'antd';

const options = ["Recipe1", "Recipe2", "Recipe3", "Recipe4"];  // Populate this list with your recipes

ReactDOM.render(
  <Checkbox.Group options={options} />,
  document.getElementById('checkboxGroupComponent')
);
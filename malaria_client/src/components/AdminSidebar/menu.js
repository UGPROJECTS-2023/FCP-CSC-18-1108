import Item from "./item";

const Menu = ({ data, isLoading, showMenu }) => {
  return showMenu ? (
    <div className=" space-y-5">
      <h5 className="text-sm font-bold text-gray-400">{data.name}</h5>
      <ul className="leading-10">
        {data.menuItems.map((entry, index) => (
          <Item key={index} data={entry} isLoading={isLoading} />
        ))}
      </ul>
    </div>
  ) : null;
};

Menu.defaultProps = {
  isLoading: false,
  showMenu: false,
};

export default Menu;

import Link from "next/link";

const Item = ({ data, isLoading }) => {
  return isLoading ? (
    <div className="h-6 mb-3 bg-gray-600 rounded animate-pulse" />
  ) : (
    <li className="flex items-center my-5 mx-5">
      <span className=" py-2 px-2 rounded-lg text-primary w-8 h-8 bg-[#F9F9F9] hover:bg-primary hover:text-white  items-center">{data.icon}</span>
      <Link href={data.path}>
        <a className=" text-primary hover:text-gray-700 text-xl ml-5">{data.name}</a>
      </Link>

    </li>
  );
};

Item.defaultProps = {
  data: null,
  isLoading: false,
};

export default Item;

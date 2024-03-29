import empty from '../../images/empty.png';

export const EmptyShopingList = () => {
  return (
    <>
      <div className="flex mt-20 items-center flex-col md:mt-36">
        <p className="w-60 text-sm text-center text-gray-700 md:text-lg md:w-350 dark:text-gray-400">
          This page is empty, add some books and proceed to order.
        </p>
        <img className="md:h-60 md:w-80 " src={empty} alt="" />
      </div>
    </>
  );
};

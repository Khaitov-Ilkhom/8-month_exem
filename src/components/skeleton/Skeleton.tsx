import { Skeleton } from 'antd';

const Skeletons = () => {
  return (
      <div>
        <div className="max-w-[360px]">
          <Skeleton.Image className="!w-[320px] min-h-[200px] p-3" active={true}/>
          <div className="w-full p-3 flex justify-items-start flex-col items-start gap-2">
            <Skeleton.Input className="!w-[320px]" active={true} size={"default"}/>
            <Skeleton.Input className="!w-[280px]" active={true} size={"small"}/>
            <Skeleton.Input active={true} size={"small"}/>
            <Skeleton.Input className="!w-[280px]" active={true} size={"small"}/>
          </div>
        </div>
      </div>
  )
}
export default Skeletons

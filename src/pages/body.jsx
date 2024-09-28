import Bcard from "../bodycomponent/b-card"
export default function Body(){
    return(
        <>
        <div
        className="h-fit w-full pb-18 mb-10"
        style={{
          background: "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(173, 216, 230, 1), rgba(173, 216, 230, 1), rgba(255, 255, 255, 1))",
        }}
      >
        <div className="w-full flex justify-center pt-24 min-h-96">
          <Bcard />
          <Bcard />
          <Bcard />
        </div>
        
      </div>
        </>
    )
}
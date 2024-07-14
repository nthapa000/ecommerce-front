import Featured from "@/components/Featured";
import Header from "@/components/Header";

export default function Homepage(){
  return (
    <div className="roboto-regular">
      <Header/>
      <Featured/>
    </div>
  )
}

export function getServerSideProps(){
  
}
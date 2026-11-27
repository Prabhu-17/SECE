import Parent from "@/components/Parent"
import Count from "@/hooks/Count"
import { StudentContext } from "@/StudentContext"

const About = () => {
    let StudentName="Student"
  return (
    <div>
      <StudentContext.Provider value={StudentName}>
        <Parent />
      </StudentContext.Provider>

      <Count />
    </div>
  )
}
export default About
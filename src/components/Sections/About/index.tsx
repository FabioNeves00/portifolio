import { useContext } from "react"
import { ABOUT_DESCRIPTION_TEXT, ABOUT_TITLE_TEXT } from "../../../constants"
import { LanguageContext } from "../../../contexts"
import { TextDivider } from "../../Dividers"

export const About = () => {
    const {language} = useContext(LanguageContext)

  return (
    <main id="about" className="flex flex-col gap-2 pt-14 w-full h-screen pb-12">
        <h1 className="title w-full flex flex-col justify-center items-center">
          {ABOUT_TITLE_TEXT[language]}
            <TextDivider color="light-gray"/>
        </h1>
        <p className="subtitle w-full text-center p-2 md:p-8">
          {ABOUT_DESCRIPTION_TEXT[language]}
        </p>
    </main>
  )
}


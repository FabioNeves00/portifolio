import { useContext } from "react"
import { ABOUT_DESCRIPTION_TEXT, ABOUT_TITLE_TEXT } from "../../../constants"
import { LanguageContext } from "../../../contexts"
import { TextDivider } from "../../Dividers"

export const About = () => {
    const {language} = useContext(LanguageContext)

  return (
    <main className="flex flex-col gap-2  mt-12 w-full h-fit pb-12 ">
        <h1 className="title w-full flex flex-col justify-center items-center">
          {ABOUT_TITLE_TEXT[language]}
            <TextDivider color="light-gray"/>
        </h1>
        <p className="subtitle w-full text-center p-2 md:p-8">
          {ABOUT_DESCRIPTION_TEXT[language]}
        </p>
        {/* <a href="#techs" className="center select-none cursor-pointer bg-gradient-to-br from-brand-purple to-brand-white dark:to-brand-dark-blue rounded-xl drop-shadow-lg w-60 h-14 text-brand-black-blue dark:text-brand-white font-medium text-xl hover:brightness-75">{HERO_BUTTON_TEXT[language]}</a> */}
    </main>
  )
}


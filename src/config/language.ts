import RuLang from "./langs/ru";
import EnLang from "./langs/en";
import {IAppLanguage} from "./langs/interface";

const CurrentLang: {[key: string]: IAppLanguage} = {
  English: EnLang,
  Russian: RuLang,
};

export default CurrentLang;

import { useTranslation } from "react-i18next";
const DetailsInfo = ({poke}) => {
    const {t} = useTranslation();
    return (
        <div className="mx-4 mt-6 lg:basis-96">
            <div>
                <p>
                <span className="font-bold text-gray-700">{t("Name")}: </span>
                <span className="text-shadow-lg/20">
                    {poke ? poke.name : t("Loading...")}
                </span>
                </p>
            </div>
            <div className="mt-2">
                <p>
                <span className="font-bold text-gray-700">{t("Type")}: </span>
                <span className="text-shadow-lg/20">
                    {poke? poke.types.length === 1
                        ? t(poke.types[0].type.name)
                        : t(poke.types[0].type.name) +
                        "/" +
                        t(poke.types[1].type.name)
                    : t("Loading...")}
                </span>
                </p>
            </div>
            <div className="mt-2">
                <p>
                <span className="font-bold text-gray-700">{t("Height")}: </span>
                <span className="text-shadow-lg/20">
                    {poke ? poke.height / 10 : t("Loading...")}mts
                </span>
                </p>
            </div>
            <div className="mt-2">
                <p>
                <span className="font-bold text-gray-700">{t("Weight")}: </span>
                <span className="text-shadow-lg/20">
                    {poke ? poke.weight / 10 : t("Loading...")}kgs
                </span>
                </p>
            </div>
            <div className="mt-2">
                <p>
                <span className="font-bold text-gray-700">
                    {t("Abilities")}:{" "}
                </span>
                <span className="text-shadow-lg/20">
                    {poke
                    ? poke.abilities.length === 1
                        ? t(poke.abilities[0].ability.name)
                        : poke.abilities[1].is_hidden === true
                        ? t(poke.abilities[0].ability.name)
                        : t(poke.abilities[0].ability.name) +
                        " / " +
                        t(poke.abilities[1].ability.name)
                    : t("Loading...")}
                </span>
                </p>
            </div>
            <div className="mt-2 mb-4">
                <p>
                <span className="font-bold text-gray-700">
                    {t("Hidden Ability")}:{" "}
                </span>
                <span className="text-shadow-lg/20">
                    {poke
                    ? poke.abilities.length > 2 &&
                        poke.abilities[2].is_hidden === true
                        ? t(poke.abilities[2].ability.name)
                        : poke.abilities.length > 1 &&
                        poke.abilities[1].is_hidden === true
                        ? t(poke.abilities[1].ability.name)
                        : t("none")
                    : t("Loading...")}
                </span>
                </p>
            </div>
        </div>
    )
}
export default DetailsInfo;
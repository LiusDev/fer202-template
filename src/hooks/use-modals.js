import { useContext } from "react"
import { ModalsContext } from "../context/ModalsContext"

const useModals = () => {
    /**
     * @type {{
     *  showModals: ({ title: string, children: React.ReactNode, footer?: React.ReactNode }) => void
     * }}
     */
    const modals = useContext(ModalsContext)

    return {
        showModals: modals.showModals,
        hideModals: modals.hideModals,
    }
}

export default useModals

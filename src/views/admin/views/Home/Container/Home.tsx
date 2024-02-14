import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../css/home.css";
import { Box } from "../../../../../components/Box";
import { Button } from "../../../../../components/Button";
const Home = () => {
    return (
        <div className="w-full h-full grid grid-cols-[75%_25%] max-xl:grid-cols-1">
            <div className=""></div>
            <div className="max-xl:hidden">
                <div className="p-8 flex flex-col gap-8">
                    <Box className="tutorial">
                        <div className="flex">
                            <img src="public\Logo Sa.svg" alt="logo SNDB" width={50} />
                            <span className="text-2xl">SNDB 2023</span>
                        </div>
                        <span className="text-[10px]">
                            Commencez avec le tutoriel. Il vous présentera rapidement les
                            fonctionnalités principales de SNDB.
                        </span>
                        <Button label="Regarder maintenant" className="w-full border-2" />
                    </Box>
                    <Box className="welcome bg-[#ffffff10]">
                        <span className="text-[13px] font-semibold text-left">
                            Bienvenue sur la plateforme SNDB!
                        </span>
                        <span className="text-[10px]">
                            Votre hub centralisé pour une gestion administrative efficace. Notre
                            tableau de bord intuitif offre une vue d'ensemble complète de toutes vos
                            tâches administratives, permettant une gestion simplifiée et une prise
                            de décision éclairée
                        </span>
                    </Box>
                    <Box className="optimize bg-[#ffffff10]">
                        <span className="text-[13px] font-semibold text-left">
                            Optimisez votre productivité
                        </span>
                        <span className="text-[10px]">
                            Suivez les performances en temps réel et simplifiez votre workflow grâce
                            à notre plateforme conviviale.
                        </span>
                    </Box>
                    <Box className="bg-[#ffffff10]">
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{ right: "prev,next" }}
                            handleWindowResize={true}
                            themeSystem="bootstrap5"
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Home;

class PolyTrackTestMod {
    constructor() {
        this.loaded = false;

        this.init = async (pml) => {
            console.log("[PolyTrack Test Mod] Initialisation");

            console.log(
                "[PolyTrack Test Mod] PolyTrack :",
                pml.polyVersion
            );

            console.log(
                "[PolyTrack Test Mod] PML :",
                pml.pmlVersion
            );
        };

        this.postInit = () => {
            console.log(
                "[PolyTrack Test Mod] postInit()"
            );
        };

        this.onGameLoad = () => {
            console.log(
                "[PolyTrack Test Mod] PolyTrack chargé"
            );
        };

        this.preInit = async (pml) => {
            console.log(
                "[PolyTrack Test Mod] preInit()"
            );
        };

        this.errorInit = async (pml) => {
            console.error(
                "[PolyTrack Test Mod] Erreur d'initialisation"
            );
        };
    }
}

export const polyMod = new PolyTrackTestMod();
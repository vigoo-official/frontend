import React from "react";
import appRoutes from "../../../../routes";
import { UiView } from "../../routing/ui";

const App = function () {

    return (
        <UiView routes={appRoutes} />
    )
}

export default App;
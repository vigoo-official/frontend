import React from "react";
import { UiView } from "../../routing/ui";
import appRoutes from "../../routes";

const App = function () {

    return (
        <UiView routes={appRoutes} />
    )
}

export default App;
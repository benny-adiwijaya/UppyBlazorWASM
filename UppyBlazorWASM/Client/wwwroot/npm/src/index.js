import Uppy, { debugLogger } from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Tus from "@uppy/tus";
import DropTarget from "@uppy/drop-target";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

window.InitializeUppy = () => {
    const TUS_ENDPOINT = window.location.origin + '/files';

    const uppyDashboard = new Uppy({
        logger: debugLogger
    })
        .use(Dashboard, {
            inline: true,
            target: "#uppy",
            showProgressDetails: true,
            hideUploadButton: true
            
        })
        .use(DropTarget, {
            target: document.body
        })
        .use(Tus, { endpoint: TUS_ENDPOINT, limit: 6 });

    window.uppy = uppyDashboard;
}

window.Upload = () => {
    window.uppy.upload();
}
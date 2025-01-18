'use client';
import Profile from "@/modules/profile";
import { pdfjs } from "react-pdf";

if (typeof Promise.withResolvers === 'undefined') {
    Promise.withResolvers = function () {
        let resolve;
        let reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        return { promise, resolve, reject };
    };
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;


export default function Page() {
    return <Profile />;
}

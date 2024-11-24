import { useEffect, useState } from "react";

export function useCsv(url: string) {
    const [data, setData] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((r) => {
                const reader = r.body?.getReader();
                return reader?.read();
            })
            .then((v) => {
                const decoder = new TextDecoder();
                const stuff = decoder.decode(v?.value);
                // console.log(stuff);
                setData(stuff);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
}

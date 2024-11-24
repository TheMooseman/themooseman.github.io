export function splitColsRows(file?: string) {
    if (file) {
        const rows = file.split("\n");
        const cols = rows[0].split(",");
        const entryRows = rows.slice(1);
        const entries = entryRows.map((v) => {
            const vals = v.split(",");
            const colVals = cols.map((_, j) => vals[j]);
            return colVals;
        });
        return { cols, entries };
    }
    return { cols: [] as string[], entries: [] as string[][] };
}

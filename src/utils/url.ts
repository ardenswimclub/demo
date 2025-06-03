
export function withBase(path: string): string {

    // reject non-local paths        
    if(path.includes('://'))
        return path;

    // don't wrap local anchor links
    if(path.startsWith('#'))
        return path;

    const base = import.meta.env.BASE_URL || '/';
    const newPath = `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;



    // if(path.includes('.pdf'))
    //     console.log({base,path,newPath});
    return newPath

}
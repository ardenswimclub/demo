
export function withBase(path: string): string {
    // reject non-local paths    
    if(path.includes('://'))
        return path;
    const base = import.meta.env.BASE_URL || '/';
    return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
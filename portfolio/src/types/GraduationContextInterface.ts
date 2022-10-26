export interface GraduationContextInterface {
    type: number,
    setType: React.Dispatch<React.SetStateAction<number>>,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
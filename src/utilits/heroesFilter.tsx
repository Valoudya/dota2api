interface filterInterface {
    filterType: any;
    name: string;
    primary_attr?: string;
}

export function heroesFilter() {

    const filtersArray: filterInterface[] = [
        {name: 'strength', filterType: (item : {primary_attr: string}) => item.primary_attr === 'str'},
        {name: 'agility', filterType: (item : {primary_attr: string}) => item.primary_attr === 'agi'},
        {name: 'intelligence', filterType: (item : {primary_attr: string}) => item.primary_attr === 'int'},
        {name: 'universal', filterType: (item : {primary_attr: string}) => item.primary_attr === 'all'},
        {name: 'all', filterType: (item : {primary_attr: string}) => item}
    ]

    const chooseActiveFilter = (array: filterInterface[], filter: string) => {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return array.find(item => item.name === filter).filterType
    }

    return {filtersArray, chooseActiveFilter}
}
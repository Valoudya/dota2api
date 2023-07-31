export function useHeroesFilter() {

    const filtersArray = [
        {name: 'strength', filter: item => item.primary__attr === 'str'},
        {name: 'agility', filter: item => item.primary__attr === 'agi'},
        {name: 'intelligence', filter: item => item.primary__attr === 'int'},
        {name: 'universal', filter: item => item.primary__attr === 'all'}
    ]

    return { filtersArray}
}
type Mods = Record<string, boolean | string>
//Example
// const obj: Mods = {
//   'hovered': true,
//   'test': 'test testing'
// }

export function classNames(cls: string, mods: Mods, additional: string[]): string{
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(' ')
}

// classNames('remove-btn', {hovered: true, selectable: true, red: true}, ['pgd'])
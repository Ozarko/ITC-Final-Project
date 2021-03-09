export function addStyleOnEvent(mainStyle, ...rest) {
  const styles = [mainStyle];
  console.log('click')

  if(rest) {
    styles.push(...rest)
  }
  
  return styles.join(' ')
}

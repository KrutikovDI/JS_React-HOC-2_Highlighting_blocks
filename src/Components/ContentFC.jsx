export default function ContentFC(Component, TagPopular, TagNew){
  return function(props) {
    if(props.views > 1000){
      return <TagPopular><Component {...props}/></TagPopular>
    } else if (props.views < 100) {
      return <TagNew><Component  {...props}/></TagNew>
    } else {
      return Component(props)
    }
  }
}
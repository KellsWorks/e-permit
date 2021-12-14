interface Props{
    selected: string, children: React.ReactNode | any
}

const Tab: React.FC<Props> = ({selected, children}) => {

    if(selected){
      return(
          <div>
              {children}
          </div>
      )      
    }

    return null
}

export default Tab
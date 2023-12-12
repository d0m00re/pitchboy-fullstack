import MoodBadIcon from '@mui/icons-material/MoodBad';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

type IICon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}

type Props = {
    id : string;
    notation : number;
    updateNotation : (id : string, rating : number) => void;
}

type INotationElem = {
    name : string,
    notation : number,
    CpnIcon :  IICon,
    color : string
}

const notationElemArray : INotationElem[] = [{
    name : "bad",
    notation : 0,
    CpnIcon : MoodBadIcon,
    color : "red"
}, {
    name : "not bad",
    notation : 1,
        CpnIcon : SentimentDissatisfiedIcon,
    color : "orange"
}, {
    name : "perfect",
    notation : 2,
    CpnIcon : TagFacesIcon,
    color : "green"
}]

function Notation(props: Props) {
  return (
    <div>
        {
            notationElemArray.map((data, i) => <data.CpnIcon
                style={{color : (props.notation === i) ? data.color : "grey"}}
                onClick={() => {props.updateNotation(props.id, data.notation)}}
            />)
        }
    </div>
  )
}

export default Notation
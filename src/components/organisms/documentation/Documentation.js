import Button from '../../atoms/button/Button'
import ControlButtons from '../../molecules/control-buttons/ControlButtons'
import RoundChooser from '../../molecules/round-chooser/RoundChooser'
import TimeChooser from '../../molecules/time-chooser/TimeChooser'
import TimePanel from '../../molecules/time-panel/TimePanel'

import './Documentation.css'


export default function Documentation(props) {
    return (
        <div className='documentation'>
            <div className="documentation-introduction">
                <p>
                    For this assignment, I've used the Atomic Design Principle. It's named that way because it’s very idea is founded in that of Chemistry, and the study of the composition of matter. The universe is made up of a fixed set of ‘atomic elements’ – known to many of us as the periodic table of elements. These elements are the building blocks of everything around us.
                </p>
                <p>
                    In Chemistry, these atomic elements have fixed properties that define them. Oxygen and Hydrogen on their own are atoms with independent properties. However when these elements are combined, they create molecules, which take on their own unique characteristics, made up of the atoms they contain. In the case of hydrogen and oxygen, pairing two hydrogen atoms with oxygen creates what we know as the water molecule.
                </p>
                <p>
                    This understanding of how smaller elements, or atoms, can be combined together to create larger objects, or molecules, parallels well with the design world, and the many elements we use to construct our designs. Following the atomic design principles provides us a structure for not only formulating our design, but creates the building blocks for constructing our design systems and pattern libraries.
                </p>
                <p>
                    Here you'll find more information on this principle:
                </p>
                <a href="https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/" target="_blank" rel="noreferrer">Atomic Design Principles & Methodology 101</a>
            </div>
            <div className='documentation-atoms'>
                <h1>Atoms</h1>
                <table>
                    <tr className='dark-border'>
                        <th>Component</th>
                        <th>Description</th>
                        <th>The thing</th>
                    </tr>
                    <tr>
                        <td>Button</td>
                        <td>This is a button</td>
                        <td>
                            <Button classes='small start'>Start</Button>
                        </td>
                    </tr>
                </table>
            </div> 
            <div className='documentation-molecules'>
                <h1>Molecules</h1>
                <table>
                    <tr className='dark-border'>
                        <th>Component</th>
                        <th>Description</th>
                        <th>The thing</th>
                    </tr>
                    <tr className='light-border'>
                        <td>Control Buttons</td>
                        <td>These buttons are used to control the timer</td>
                        <td>
                            <ControlButtons/>
                        </td>
                    </tr>

                    <tr className='light-border'>
                        <td>Round Chooser</td>
                        <td>This element is used to choose the number of rounds</td>
                        <td>
                            <RoundChooser totalRounds="5"/>
                        </td>
                    </tr>

                    <tr className='light-border'>
                        <td>Time Chooser</td>
                        <td>This element is used to choose the time for the countdown</td>
                        <td>
                            <TimeChooser minutes={1} seconds={0}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Time Panel</td>
                        <td>This element is used for the display of how much time is left</td>
                        <td>
                            <TimePanel time={60000}/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
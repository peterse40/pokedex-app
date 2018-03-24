import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from './Search';
import Create from './Create';
import Destroy from './Destroy';

class TabsInterface extends Component {

    render() {
        return(

            <Tabs>
                <TabList>
                    <Tab>Search</Tab>
                    <Tab>Create</Tab>
                    <Tab>Destroy</Tab>
                </TabList>

                <TabPanel>
                    <Search />
                </TabPanel>
                <TabPanel>
                    <Create />
                </TabPanel>
                <TabPanel>
                    <Destroy />
                </TabPanel>
            </Tabs>

        )

    }

}
export default TabsInterface;

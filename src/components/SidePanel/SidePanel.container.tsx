import React, { Component } from 'react'
import {
    Icon,
    Link,
    SidePanelContainer,
    SidePanelItem,
    SidePanelList
} from './SidePanel.styles'

class SidePanel extends Component {
    public render() {
        return (
            <SidePanelContainer>
                <SidePanelList>
                    <SidePanelItem>
                        <Icon icon="home" />
                        <Link to="/inicio">Inicio</Link>
                    </SidePanelItem>
                    <SidePanelItem>
                        <Icon icon="notes-medical" />
                        <Link to="/cotizacion">Cotizacion</Link>
                    </SidePanelItem>
                    <SidePanelItem>
                        <Icon icon="history" />
                        <div>Historial</div>
                    </SidePanelItem>
                    <SidePanelItem>
                        <Icon icon="cogs" />
                        <div>Configuracion</div>
                    </SidePanelItem>
                </SidePanelList>
            </SidePanelContainer>
        )
    }
}

export default SidePanel

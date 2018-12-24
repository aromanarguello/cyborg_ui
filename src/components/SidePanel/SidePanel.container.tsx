import React, { Component } from 'react'
import {
    Icon,
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
                        <div>Inicio</div>
                    </SidePanelItem>
                    <SidePanelItem>
                        <Icon icon="notes-medical" />
                        <div>Cotizacion</div>
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

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
                        <div>Crear Orden</div>
                    </SidePanelItem>
                    <SidePanelItem>
                        <Icon icon="history" />
                        <div>Historial</div>
                    </SidePanelItem>
                    <SidePanelItem>
                        <Icon icon="cogs" />
                        <div>Ajustes</div>
                    </SidePanelItem>
                </SidePanelList>
            </SidePanelContainer>
        )
    }
}

export default SidePanel

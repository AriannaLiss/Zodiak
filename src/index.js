import React from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function ZodiakRow({signName, dates}){
    return (
        <tr>
            <td>{signName}</td>
            <td>{dates}</td>
        </tr>
    )
}
function ZodiakTable(){
    return(
            <Table bordered striped hover variant="dark">
                <thead>
                    <tr>
                        <th>Sign of Zodiak</th>
                        <th>Dates</th>
                    </tr>
                </thead>
                <tbody>
                    <ZodiakRow signName='♈ Aries (Ram)' dates='March 21–April 19'/>
                    <ZodiakRow signName='♉ Taurus (Bull)' dates='April 20–May 20'/>
                    <ZodiakRow signName='♊ Gemini (Twins)' dates='May 21–June 21'/>
                    <ZodiakRow signName='♋ Cancer (Crab)' dates='June 22–July 22'/>
                    <ZodiakRow signName='♌ Leo (Lion)' dates='July 23–August 22'/>
                    <ZodiakRow signName='♍ Virgo (Virgin)' dates='August 23–September 22'/>
                    <ZodiakRow signName='♎ Libra (Balance)' dates='September 23–October 23'/>
                    <ZodiakRow signName='♏ Scorpius (Scorpion)' dates='October 24–November 21'/>
                    <ZodiakRow signName='♐ Sagittarius (Archer)' dates='November 22–December 21'/>
                    <ZodiakRow signName='♑ Capricornus (Goat)' dates='December 22–January 19'/>
                    <ZodiakRow signName='♒ Aquarius (Water Bearer)' dates='January 20–February 18'/>
                    <ZodiakRow signName='♓ Pisces (Fish)' dates='February 19–March 20'/>
                </tbody>
            </Table>
        )
    }

createRoot(document.getElementById('root')).render(<ZodiakTable/>);

import { Search } from "@material-ui/icons";
import React from "react";
import { useEffect } from 'react';
import SearchIcon from '../../src/search.png'
import sports from '../sports.jpg'
import { Button } from "./Button";
import alumni from "../alumni.jpg";
import student from '../students.jpg'
import community from '../community.jpg'
import academic from '../academic.jpg'

function SearchBar(){
    return(
        <div className="searchContainer">
            <div className="search">
                <input
                placeholder="what are you interested in?"
                value= ''
                onChange={()=>{}}
                />
                <Button>
                <img
                src = {SearchIcon}
                alt='sports events' style={{ width: 7, height: 7, resizeMode: 'contain', transform: [{ scale: 2 }] }}
                onClick={()=> {}}
                />
                </Button>
            </div>

            <div className="container">
                <div className="sports">
                    <div></div>
                </div>

                <Button>
                    <div>
                    <img src= {sports} alt='sports events' style={{ width: 250, height: 250, resizeMode: 'contain', transform: [{ scale: 2 }] }}/>
                    </div>
                        <div>
                        <h1>Sporting Events</h1>
                    </div>
                </Button>
                <Button>
                    <div>
                        <img src={alumni} alt='alumni events' style={{ width: 250, height: 250, resizeMode: 'contain', transform: [{ scale: 2 }] }}/>
                    </div>
                    <div>
                        <h1> Alumni Events</h1>
                    </div>
                </Button>
                <Button>
                    <div>
                        <img src={student} alt='student events' style={{ width: 250, height: 250, resizeMode: 'contain', transform: [{ scale: 2 }] }}/>
                    </div>
                    <div>
                        <h1> Student</h1>
                    </div>
                </Button>
                <Button>
                    <div>
                        <img src={community} alt='community events' style={{ width: 250, height: 250, resizeMode: 'contain', transform: [{ scale: 2 }] }}/>
                    </div>
                    <div>
                        <h1> Community</h1>
                    </div>
                </Button>
                                <Button>
                    <div>
                        <img src={academic} alt='academic events' style={{ width: 250, height: 250, resizeMode: 'contain', transform: [{ scale: 2 }] }}/>
                    </div>
                    <div>
                        <h1> Academic</h1>
                    </div>
                </Button>

            </div>
        </div>


    );
}
export default SearchBar
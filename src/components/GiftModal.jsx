import {useParams, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './components/Navbar'

const API_URL = "http://localhost:8000/api";

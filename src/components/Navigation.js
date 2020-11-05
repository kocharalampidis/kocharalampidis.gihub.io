import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<div class=''>
			<ul class='list-reset md:flex sm:flex'>
				<li class='mr-6'>
					<Link
						to='/'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Home
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/Mybio'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						CV
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/Projects'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Projects
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/Contact'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Contact
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/Profile'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Profile
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/Certificates'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						Certificates
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/AD_Certs'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						AD_Certs
					</Link>
				</li>
				<li class='mr-6'>
					<Link
						to='/DL_Certs'
						class='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'>
						DL_Certs
					</Link>
				</li>
			</ul>
		</div>
	);
}
export default Navigation;

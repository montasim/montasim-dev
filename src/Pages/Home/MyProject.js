import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MyProject = () => {
    const navigate = useNavigate();
    const { _id } = useParams();

    return (
        <div
            class="relative block border border-gray-100 rounded-xl"
        >
            <img
                loading="lazy"
                alt="Build Your Own Drone"
                class="object-contain w-full h-56 rounded-xl"
                src="https://www.hyperui.dev/photos/toy-1.jpeg"
            />

            <div class="p-6">
                <p class="text-sm font-medium text-gray-400">
                    Project Type: Full Stack
                </p>

                <h5 class="mt-1 text-lg font-bold">
                    Project Name:
                </h5>

                <button onClick={() => navigate(`/project-details/${_id}`)}
                    name="add"
                    type="button"
                    class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-primary rounded-xl"
                >
                    <span class="text-sm font-medium">
                        Details
                    </span>
                </button>
            </div>
        </div>
    );
};

export default MyProject;
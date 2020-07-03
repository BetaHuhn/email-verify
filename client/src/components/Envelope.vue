<template>
    <div id="envelope">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="envelope" viewBox="0 0 425 494.647">
            <defs>
                <filter id="a" x="203" y="197.647" width="222" height="297" filterUnits="userSpaceOnUse">
                    <feOffset dx="3" dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="b" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter id="c" x="0" y="197.647" width="424.938" height="297" filterUnits="userSpaceOnUse">
                    <feOffset dx="3" dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="d" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="d" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g transform="translate(5.608)">
                <path class="darkred" d="M57.54,57.54,288,0,243.028,243.028,0,288Z"
                    transform="translate(203.647 0) rotate(45)" />
                <rect class="white" width="297" height="326" transform="translate(55.392 68.647)" />
                <g class="filterA" transform="matrix(1, 0, 0, 1, -5.61, 0)">
                    <path class="red" d="M139.5,0,279,204H0Z" transform="translate(209 482.65) rotate(-90)" />
                </g>
                <g class="filterC" transform="matrix(1, 0, 0, 1, -5.61, 0)">
                    <path class="lightred" d="M0-.821l406.938,278.6L0,278.179Z" transform="translate(6 204.47)" />
                </g>
                <path v-if="status == 'valid'" class="green"
                    d="M45.093,101.639,1.944,58.489a6.639,6.639,0,0,1,0-9.388l9.388-9.388a6.638,6.638,0,0,1,9.388,0L49.788,68.78,112.047,6.521a6.639,6.639,0,0,1,9.388,0l9.388,9.388a6.639,6.639,0,0,1,0,9.388L54.482,101.639A6.638,6.638,0,0,1,45.093,101.639Z"
                    transform="translate(145.392 140.909)" />
                <path v-else-if="status == 'invalid'" class="lightred" d="M119,18.73,107.77,7.5,63.25,52.02,18.73,7.5,7.5,18.73,52.02,63.25,7.5,107.77,18.73,119,63.25,74.48,107.77,119,119,107.77,74.48,63.25Z" transform="translate(140.892 138.147)"/>
                <path v-else-if="status == 'error'" class="neutral" d="M40.437,106.142A19.656,19.656,0,1,1,20.781,86.486,19.678,19.678,0,0,1,40.437,106.142ZM3.4,6.191l3.342,66.83a5.9,5.9,0,0,0,5.889,5.6h16.3a5.9,5.9,0,0,0,5.889-5.6l3.342-66.83A5.9,5.9,0,0,0,32.272,0H9.29A5.9,5.9,0,0,0,3.4,6.191Z" transform="translate(180 130)"/>
                <path v-else class="neutral" d="M43.794,0c-19,0-31.305,7.784-40.967,21.667A5.719,5.719,0,0,0,4.06,29.492l10.268,7.786a5.713,5.713,0,0,0,7.915-.987c5.962-7.47,10.385-11.77,19.7-11.77,7.323,0,16.38,4.713,16.38,11.814,0,5.368-4.431,8.125-11.662,12.179-8.432,4.727-19.59,10.61-19.59,25.328v2.33a5.713,5.713,0,0,0,5.713,5.713h17.25a5.713,5.713,0,0,0,5.713-5.713V74.8c0-10.2,29.817-10.627,29.817-38.234C85.564,15.771,64,0,43.794,0ZM41.409,88.894A16.488,16.488,0,1,0,57.9,105.382,16.507,16.507,0,0,0,41.409,88.894Z" transform="translate(160.11 142.99)"/>
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'Envelope',
        props: {
            status: {
                type: String
            }
        }
        
    }
</script>

<style scoped>

    .envelope{
        width: 425px;
    }

    @media screen and (max-width: 1200px) { 
        .envelope{
            width: 160px;
        }
    }

    .darkred {
        fill: #a22b2b;
    }

    .white {
        fill: #fff;
    }

    .red {
        fill: #c93a3a;
    }

    .lightred {
        fill: #ff4848;
    }

    .green {
        fill: var(--green);
    }

    .filterC {
        filter: url(#c);
    }

    .filterA {
        filter: url(#a);
    }

    .neutral{
        fill: var(--bg);
    }

</style>
<script lang="ts">
	import Button from "$lib/components/core/button.svelte";
    import Paragraph from "../projects/paragraph.svelte";



</script>

<div id="about" class="bg-secondary-light dark:bg-secondary-dark w-full flex justify-center py-24 md:px-32 px-8">
    <div class="max-w-3xl w-full flex flex-col">
        <h2 class="text-3xl font-bold text-black dark:text-white pb-2">About Me</h2>
        <Paragraph target="_blank" content="I'm a software engineer specialising in computer vision at <a href='https://www.polymetrix.org/'>Polymetrix</a> where I’m currently building an app to take highly detailed 3d scans of people's heads in order to fit masks quickly and accurately." />
        <Paragraph target="_blank" content="I graduated from Imperial College London in July 2022 with first-class honors in Design Engineering - a course that combines engineering expertise, design thinking, and entrepreneurial skills. During my time there I worked as an undergraduate teaching assistant for the first-year maths course, as well as being selected to represent the department at both open days and at the board of examiners meetings. Additionally, I worked at <a href='https://camgandevices.com/'>Cambridge GaN Devices</a> for 6 months, leading the development of an automated test suite for next-generation power transformers. The system could be configured remotely and then display results on the company intranet site, reducing testing errors, engineering time, and ensuring consistent testing across PCBs." />
        <Paragraph target="_self" content="During my master's year, I specialised in machine learning, robotics, and IoT which culminated in <a href='/deconstructed'>my thesis</a> looking at the robotic disassembly of waste electronics, using a purely synthetic dataset for training two vision systems and a reinforcement learning agent. I also developed <a href='/fruitful-spaces'>an IoT system for hydroponic urban farming</a> in under-utilised office space." />
        <Paragraph target="_self" content="Outside of work I can often be found toying with a new coding challenge, training in calisthenics, or in the winter, carving down the side of a mountain on my snowboard whenever I get the opportunity." />
        
        <Button style="mt-6 bg-accent-base" type="link" target="_blank" href="/documents/ChrisVail_CV.pdf">Download CV</Button>
    </div>
</div>
---
layout: project
title: ToolMaker
permalink: /toolmaker/
description: LLM Agents Making Agent Tools
img: assets/img/publication_preview/toolmaker.png
figure: https://raw.githubusercontent.com/KatherLab/ToolMaker/main/resources/overview.png
importance: 1
venue: ACL 2025
authors:
  - name: Georg Wölflein
    institutions: [1, 2, 3, "&dagger;"]
    url: https://georg.woelflein.eu
  - name: Dyke Ferber
    institutions: [3, 4, "&Dagger;"]
    url: https://scholar.google.com/citations?user=r7JtdUcAAAAJ
  - name: Daniel Truhn
    institutions: [5]
    url: https://www.lfb.rwth-aachen.de/en/institute/team/truhn
  - name: Ognjen Arandjelović
    institutions: [2]
    url: https://risweb.st-andrews.ac.uk/portal/en/persons/oggie-arandelovic(fdd98ab1-564a-42a3-bf0c-fab7afbbd63c).html
  - name: Jakob N. Kather
    institutions: [1, 4, 6]
    url: https://kather.ai/
institutions:
  - id: 1
    name: Else Kröner Fresenius Center for Digital Health, TU Dresden, Germany
  - id: 2
    name: School of Computer Science, University of St Andrews, UK
  - id: 3
    name: Synagen AI, Germany
  - id: 4
    name: National Center for Tumor Diseases (NCT), Heidelberg University Hospital, Germany
  - id: 5
    name: Department of Diagnostic and Interventional Radiology, University Hospital Aachen, Germany
  - id: 6
    name: Department of Medicine I, University Hospital Dresden, Germany
  - id: "&dagger;"
    name: work done while at EKFZ for Digital Health, TU Dresden and University of St Andrews
  - id: "&Dagger;"
    name: work done while at EKFZ for Digital Health, TU Dresden and NCT Heidelberg
links:
  paper: https://arxiv.org/abs/2502.11705
  code: https://github.com/KatherLab/ToolMaker
  poster: /assets/pdf/toolmaker_poster.pdf
abstract: Tool use has turned large language models (LLMs) into powerful agents that can perform complex multi-step tasks by dynamically utilising external software components. However, these tools must be implemented in advance by human developers, hindering the applicability of LLM agents in domains which demand large numbers of highly specialised tools, like in life sciences and medicine. Motivated by the growing trend of scientific studies accompanied by public code repositories, we propose ToolMaker, a novel agentic framework that autonomously transforms papers with code into LLM-compatible tools. Given a short task description and a repository URL, ToolMaker autonomously installs required dependencies and generates code to perform the task, using a closed-loop self-correction mechanism to iteratively diagnose and rectify errors. To evaluate our approach, we introduce a benchmark comprising 15 diverse and complex computational tasks spanning both medical and non-medical domains with over 100 unit tests to objectively assess tool correctness and robustness. ToolMaker correctly implements 80% of the tasks, substantially outperforming current state-of-the-art software engineering agents. ToolMaker therefore is a step towards fully autonomous agent-based scientific workflows.
tldr: We develop an agentic framework for autonomously creating LLM-compatible tools from papers with associated code repositories.
---

# Citation

If you would like to cite our work, please use:

{% raw %}
```bibtex
@inproceedings{wolflein2025toolmaker,
  author        = {W\"{o}lflein, Georg and Ferber, Dyke and Truhn, Daniel and Arandjelovi\'{c}, Ognjen and Kather, Jakob Nikolas},
  title         = {{LLM} Agents Making Agent Tools},
  booktitle     = {Annual Meeting of the Association for Computational Linguistics (ACL)},
  year          = {2025},
  month         = {07},
  url           = {https://arxiv.org/abs/2502.11705}
}
```
{% endraw %}

# Acknowledgements
We thank Junhao Liang, Michaela Unger, and David Charatan for contributing tasks to TM-Bench.
We also appreciate Jan Clusmann, Tim Lenz, and Lina Hadji-Kyriacou for their feedback on the manuscript, and thank Nathaly Dongo and Annelies Blätterlein for logo design.

## Funding
GW is supported by SCADS.AI, Lothian NHS, and in part by funding from the European Union's Horizon 2020 research and innovation programme (KATY, 101017453). 
JNK is supported by the German Cancer Aid (DECADE, 70115166), the German Federal Ministry of Education and Research (PEARL, 01KD2104C; CAMINO, 01EO2101; TRANSFORM LIVER, 031L0312A; TANGERINE, 01KT2302 through ERA-NET Transcan; Come2Data, 16DKZ2044A; DEEP-HCC, 031L0315A; DECIPHER-M, 01KD2420A; NextBIG, 01ZU2402A), the German Academic Exchange Service (SECAI, 57616814), the German Federal Joint Committee (TransplantKI, 01VSF21048), the European Union's Horizon Europe research and innovation programme (ODELIA, 101057091; GENIAL, 101096312), the European Research Council (ERC; NADIR, 101114631), the National Institutes of Health (EPICO, R01 CA263318) and the National Institute for Health and Care Research (NIHR) Leeds Biomedical Research Centre (grant number NIHR203331). 
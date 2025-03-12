---
layout: project
title: ToolMaker
description: 
img: assets/img/publication_preview/toolmaker.png
figure: https://raw.githubusercontent.com/KatherLab/ToolMaker/main/resources/overview.png
importance: 1
venue: 
authors:
  - name: Georg Wölflein
    institutions: [1, 2]
    url: https://georg.woelflein.eu
  - name: Dyke Ferber
    institutions: [1, 3]
    url: https://scholar.google.com/citations?user=r7JtdUcAAAAJ
  - name: Daniel Truhn
    institutions: [4]
    url: https://www.lfb.rwth-aachen.de/en/institute/team/truhn
  - name: Ognjen Arandjelović
    institutions: [2]
    url: https://risweb.st-andrews.ac.uk/portal/en/persons/oggie-arandelovic(fdd98ab1-564a-42a3-bf0c-fab7afbbd63c).html
  - name: Jakob N. Kather
    institutions: [1, 3, 5]
    url: https://kather.ai/
institutions:
  - id: 1
    name: Else Kröner Fresenius Center for Digital Health, TU Dresden, Germany
  - id: 2
    name: School of Computer Science, University of St Andrews, UK
  - id: 3
    name: National Center for Tumor Diseases (NCT), Heidelberg University Hospital, Germany
  - id: 4
    name: Department of Diagnostic and Interventional Radiology, University Hospital Aachen, Germany
  - id: 5
    name: Department of Medicine I, University Hospital Dresden, Germany
links:
  paper: https://arxiv.org/abs/2502.11705
  code: https://github.com/KatherLab/ToolMaker
abstract: Tool use has turned large language models (LLMs) into powerful agents that can perform complex multi-step tasks by dynamically utilising external software components. However, these tools must be implemented in advance by human developers, hindering the applicability of LLM agents in domains which demand large numbers of highly specialised tools, like in life sciences and medicine. Motivated by the growing trend of scientific studies accompanied by public code repositories, we propose ToolMaker, a novel agentic framework that autonomously transforms papers with code into LLM-compatible tools. Given a short task description and a repository URL, ToolMaker autonomously installs required dependencies and generates code to perform the task, using a closed-loop self-correction mechanism to iteratively diagnose and rectify errors. To evaluate our approach, we introduce a benchmark comprising 15 diverse and complex computational tasks spanning both medical and non-medical domains with over 100 unit tests to objectively assess tool correctness and robustness. ToolMaker correctly implements 80% of the tasks, substantially outperforming current state-of-the-art software engineering agents. ToolMaker therefore is a step towards fully autonomous agent-based scientific workflows.
---

# Citation

If you would like to cite our work, please use:

```bibtex
@misc{wolflein2025toolmaker,
  author        = {W\"{o}lflein, Georg and Ferber, Dyke and Truhn, Daniel and Arandjelovi\'{c}, Ognjen and Kather, Jakob Nikolas},
  title         = {{LLM} Agents Making Agent Tools},
  year          = {2025},
  eprint        = {2502.11705},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV},
  url           = {https://arxiv.org/abs/2502.11705}
}
```

# Acknowledgements

GW is supported by Lothian NHS. 